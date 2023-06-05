#!/usr/bin/python3

""" Querrying cities by state id """

import MySQLdb
from sys import argv

connection = MySQLdb.connect(
        user="root",
        password="root/root",
        db="hbtn_0e_4_usa"
        )
cur = connection.cursor()
cur.execute("SELECT cities.name FROM cities INNER JOIN states ON
        states.id=cities.state_id WHERE states.name LIKE %s ORDER BY
        cities.id", (argv[4],))

rows = cur.fetchall()
res = ", ".join("".join(x) for x in rows)
print(res)
