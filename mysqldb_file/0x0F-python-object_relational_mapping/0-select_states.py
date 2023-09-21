#!/usr/bin/python3

"""Connecting to and querrying a db using mysqldb
"""

import MySQLdb

db = MySQLdb.connect(
        user="root",
        passwd="root/root",
        db="hbtn_0e_0_usa"
        )
c = db.cursor()

c.execute("""SELECT * FROM states ORDER BY id""")
rows = c.fetchall()

for i in rows:
    print(i)
