#!/usr/bin/python3

import MySQLdb
from sys import argv

db = MySQLdb.connect(
        user="root",
        passwd="root/root",
        db="hbtn_0e_0_usa"
        )
c = db.cursor()

c.execute("SELECT * FROM states WHERE states.name LIKE %s ORDER BY id",
            (argv[4],))
rows = c.fetchall()
for i in rows:
    print(i)
