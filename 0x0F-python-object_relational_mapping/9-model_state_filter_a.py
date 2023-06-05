#!/usr/bin/python3
"""Start link class to table in database
"""
import sys
from model_state import Base, State

from sqlalchemy import create_engine, text

if __name__ == "__main__":
    engine =
   create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(sys.argv[1],
       sys.argv[2], sys.argv[3], pool_pre_ping=True))
   Base.metadata.create_all(engine)

   with engine.connect() as conn:
       result = conn.execute(text("SELECT * FROM states WHERE states.name LIKE '%a%' ORDER BY id"))
        for x in result:
            print(f"{x.id}: {x.name}")
