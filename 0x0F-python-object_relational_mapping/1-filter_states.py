#!/usr/bin/python3
"""Using MSQLdb to connect and get data from my database.
"""

import MySQLdb

db = MySQLdb.connect(
        user="root",
        passwd="root/root",
        db="hbtn_0e_0_usa"
        )
c = db.cursor()

c.execute("""SELECT * FROM states WHERE name LIKE BINARY 'N%' ORDER BY id""")
rows = c.fetchall()

for i in rows:
    print(i)
