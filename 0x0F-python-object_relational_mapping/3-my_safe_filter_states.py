#!/usr/bin/python3

"""Using MySQLdb with sql injection prevention"""

import MySQLdb
from sys import argv

db = MySQLdb.connect(
        user="root",
        passwd="root/root",
        db="hbtn_0e_0_usa"
        )
c = db.cursor()

c.execute("SELECT * FROM states WHERE name LIKE BINARY %s ORDER BY id",
        (argv[4],))
rows = c.fetchall()
for i in rows:
    print(i)
