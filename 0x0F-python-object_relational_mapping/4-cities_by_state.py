#!/usr/bin/python3

""" Extrating the names of cities from a DB using MySQLdb module """

import MySQLdb

connection = MySQLdb.connect(
        user="root",
        password="root/root",
        db="hbtn_0e_4_usa"
        )
cur = connection.cursor()

cur.execute("""SELECT * FROM cities ORDER BY id""")

rows = cur.fetchall()
for i in rows:
    print(i)
