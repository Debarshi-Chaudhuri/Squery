import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("./squery-e375a-firebase-adminsdk-fsge4-80e3f0a2cb.json")
firebase_admin.initialize_app(cred)
db=firestore.client()
doc=db.collection(u'questions').document(u'0G0mawZ1LVExe0ugxfG6').get()

print(u'document data: {}'.format(doc.to_dict()))