# Regular Expressions

### Q1-1.

| #  | OK         | NG         |
| :- | :--------- | :--------- |
| 1  | pit        | pt         |
| 2  | spot       | Pot        |
| 3  | spate      | peat       |
| 4  | slap two   | part       |
| 5  | respite    |            |

Answer:
```
[a-z]*p.{1}t.*
```


### Q1-2.

| #  | OK         | NG         |
| :- | :--------- | :--------- |
| 1  | rap        | aleht      |
| 2  | them       | happy them |
| 3  | tapeth     | tarpth     |
| 4  | apth       | Apt        |
| 5  | wrap/try   | peth       |
| 6  | sap tray   | tarreth    |
| 7  | 87ap9th    | ddapdg     |
| 8  | apothecary | apples     |
| 9  |            | shape the  |

Answer:
```
[a-z0-9]*ap[^dp][^\s](th)?.*
```


### Q1-3.

| #  | OK         | NG         |
| :- | :--------- | :--------- |
| 1  | affgfking  | fgok       |
| 2  | rafgkahe   | a fgk      |
| 3  | bafghk     | afffhk     |
| 4  | baffgkit   | fgok       |
| 5  | affgfking  | afg.K      |
| 6  | rafgkahe   | aff gm     |
| 7  | bafghk     | afffhgk    |
| 8  | baffg kit  |            |

Answer:
```
[abfr]+fg\s?[fhk]+[a-z]*
```


### Q1-4.

| #  | OK         | NG         |
| :- | :--------- | :--------- |
| 1  | assumes word senses. Within does the clustering. In the but when? It was hard to tell he arrive." After she had mess! He did not let it it wasn't hers!' She replied always thought so.) Then | in the U.S.A, people often John?", he often thought, but weighed 17.5 grams well ... they'd better A.I. has long been a very like that", he thought but W. G. Grace never had much |

Answer:
```
^[a-z][a-z]+!?\s[A-Z]?[a-z]+('.|\?|.")?\s[A-Z]?[a-z]+(\.|!'|.)\)?\s?.*
```




### Q2-1.

```
a(ab)*a
```

1. abababa
2. **aaba**
3. aabbaa
4. aba
5. **aabababa**


### Q2-2.

```
ab+c?
```

1. **abc**
2. ac
3. **abbb**
4. bbc



### Q2-3.
```
a.[bc]+
```

1. **abc**
2. **abbbbbbbb**
3. **azc**
4. **abcbcbcbc**
5. ac
6. **asccbbbbcbcccc**


### Q2-4.
```
abc|xyz
```

1. **abc**
2. **xyz**
3. abc|xyz


### Q2-5.
```
[a-z]+[\.\?!]
```

1. **battle!**
2. Hot
3. green
4. **swamping.**
5. jump up.
6. **undulate?**
7. is.?


### Q2-6.
```
[a-zA-Z]*[^,]=
```

1. **Butt=**
2. BotHEr,=
3. Ample
4. FIdDlE7h=
5. **Brittle =**
6. **Other.=**


### Q2-7.
```
[a-z][\.\?!]\s+[A-Z]
```

1. A. B
2. c! d
3. e f
4. **g. H**
5. **i? J**
6. k L


### Q2-8.
```
(very )+(fat )?(tall|ugly) man
```

1. very fat man
2. fat tall man
3. **very very fat ugly man**
4. **very very very tall man**


### Q2-9.
```
<[^>]+>
```

1. **\<an xml tag\>**
2. \<opentag\>\<closetag\>
3. **\</closetag\>**
4. \<\>
5. **\<with attribute="77"\>**
