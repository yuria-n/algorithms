"use strict";

const fs = require("fs").promises;
const path = require("path");

const axios = require("axios");
const gulp = require("gulp");
const minimist = require("minimist");

const ENCODE_OPTION = "utf8";
const ROOT_DIR = "../../";
const LEETCODE_DIR = "../../LeetCode";
const LEETCODE_API_URL = "https://leetcode.com/graphql";
const LEETCODE_BASE_URL = "https://leetcode.com/problems/";

async function fetchData(query, variables = null) {
  const res = await axios.post(LEETCODE_API_URL, {
    query,
    variables,
  });
  if (res.data.errors) {
    throw new Error(`Error fetching data: ${res.data.errors}`);
  }
  return res.data.data;
}

function getIdFromLine(line) {
  const [, id] = line.match(/^\|\s+(\d+)\s+\|/);
  return Number(id);
}

async function parseInput() {
  const args = minimist(process.argv);
  const id = Number(args.id);
  if (!id || id < 0) {
    throw new Error("valid id must be provided");
  }

  const files = await fs.readdir(path.resolve(__dirname, LEETCODE_DIR));
  if (files.some((file) => file.startsWith(`${id}.`))) {
    throw new Error(`id: ${id} already exists`);
  }
  return id;
}

async function fetchQuestion(id) {
  const allQuestionsQuery = `
        query {
            allQuestions {
                questionId
                titleSlug
            }
        }
    `;
  const { allQuestions } = await fetchData(allQuestionsQuery);
  const matchedQuestion = allQuestions.find((q) => Number(q.questionId) === id);
  if (!matchedQuestion) {
    throw new Error(`question id: ${id} not found`);
  }
  const titleSlug = matchedQuestion.titleSlug;

  const questionQuery = `
        query getQuestionDetail($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                title
                titleSlug
                content
                difficulty
                exampleTestcases
            }
        }
    `;
  const { question } = await fetchData(questionQuery, { titleSlug });
  return question;
}

async function makeDirectory(question) {
  const { questionId, title, titleSlug, exampleTestcases } = question;
  const name = `${questionId}. ${title}`;

  // new directory
  const dirname = path.resolve(__dirname, LEETCODE_DIR, name);
  await fs.mkdir(dirname);

  // README.md
  const readmePath = path.resolve(dirname, "README.md");
  const url = `${LEETCODE_BASE_URL}${titleSlug}/`;
  const readmeContent = `# ${name}\n\n${url}\n`;

  // solution.js
  const jsPath = path.resolve(dirname, "solution.js");
  // TODO: fetch solution template
  const jsContent = "";

  // solution.test.js
  const jsTestPath = path.resolve(dirname, "solution.test.js");
  // TODO: format test cases based on the solution template
  const jsTestContent = exampleTestcases;

  return Promise.all([
    fs.writeFile(readmePath, readmeContent, ENCODE_OPTION),
    fs.writeFile(jsPath, jsContent, ENCODE_OPTION),
    fs.writeFile(jsTestPath, jsTestContent, ENCODE_OPTION),
  ]);
}

async function updateReadme(question) {
  const { questionId, title, difficulty } = question;
  const readmePath = path.resolve(__dirname, ROOT_DIR, "README.md");
  const data = await fs.readFile(readmePath, ENCODE_OPTION);
  const lines = data.split("\n");
  const startIndex =
    lines.findIndex((l) =>
      /\|\s#\s+\|\sTitle\s+\|\sDifficulty\s+\|\sLanguage\s+\|/.test(l),
    ) + 2;
  const endIndex = lines.findIndex((l) => l === "## HackerRank") - 1;
  const tableLines = lines.slice(startIndex, endIndex);
  tableLines.push(`| ${questionId} | ${title} | ${difficulty} | JavaScript |`);
  const updatedContent = [
    ...lines.slice(0, startIndex),
    ...tableLines.sort((l1, l2) => getIdFromLine(l1) - getIdFromLine(l2)),
    ...lines.slice(endIndex),
  ].join("\n");
  return fs.writeFile(readmePath, updatedContent, ENCODE_OPTION);
}

// usage: gulp create --id 100
gulp.task("create", create);

async function create() {
  const id = await parseInput();
  const question = await fetchQuestion(id);
  await makeDirectory(question);
  await updateReadme(question);
}
