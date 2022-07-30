var admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email:
        "firebase-adminsdk-4kpa3@bits-of-code-e7eaa.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDD79m9ySGaIsYJ\nzhqJPHPFq71n2Q8+InA2kiYRUvSdHoveFaJctWQNBtxNwNls1IZFpyk50WjD867L\nz8O7vd34lPUnOD5O3U4+DGjqZevCIGeCPJwOczxz6YfkmIdmPMo7rMqyQKUhADHp\nwx4lXHXvkeOi/xEKSzQ0kHNSvNr6FcOgGCavCFhyypm3lUXICB4sKrmL5Vd58UcS\nyUrFTzDu3E4f4vOxHZp6Cz2sdgLS3lMrLrpBKGeBghNaGFinFbmO586R04j0LhHK\nibQ/cfN7WHBqkQt5MshLnuixkaY4xCaYMEL+xLIak8RdXK/Eqyzu4bh4YVrkSkJd\nqV6OiptBAgMBAAECggEARBHfo39snQ/XnTBtJ6BI2DOB6cIO+ZcdRNghQYOAV9V0\n4gLCFVMvHxdzEdAduSFcRHZ+bAfETc8qusPDTEX6B5I4WRfBDcT0mbnV+RjPfvGj\nBCvqS1rddad7/n6/C1WzLGgrQyISPBTFQmD26CPnFQOqAcZ7NQhLareEWQojSR4K\n17CP/GFPydeXEFrpoXvaOPM2t7qasV8e3aJceIl4wWcnCmIYYrpYFwiLUJXp5IVp\nw5T7K+jjR/54YF3f/BF5jXvjjgGXf/PqZkr8DZ5KaRhfs0HmvcQAVYmpWI+kSzvX\n/eIZjIs+VPIAnFYhIXV9oKt2OcVAmE4+FJg7SHE3wQKBgQDnAnZBU+FSsaxh8/YG\nVejomk9jPKS9OMCV1ZrXB6866ZdBC2N2ZTtsOeoCHZ2mGkg/j/Db7Sarr3O4U2Lb\ndlAB1rsjMzNHy8i9pY6iHFVlaGqlGa2ubRpe2k3VgFxRRhlaDH0bsGtLQ5K6WTsd\njm8rgWnL1zafVzsNYEppUnRnxwKBgQDZIhd3HFooWZd2GcXQfKypAzk/4PUyURdS\n077Mq2NR0/pMB0Mw9sJldv4gHDvo7U4infRNf1FCYIS6Bv+awzIil7sjyt5wRk+f\nxKw/YClq6PsCDiBq50ZO4804OhozuUbq1vcSofMYZo/Ri7N/9NsMgyJkvri9BIbz\nHSR9xcA0twKBgQDWSLpZLu28P4Of+SUmC1rZKQqrCv3laFd8pX/UJxSsmTHs7Bt/\nH7hXVAF1pPMvuQF7tJG/7+QHLeEyAmeZG85rZjyBEmVnG+lBwejlB1NPleQW8hLh\n0eK8SdQZT9BSs6uglCUZIjTkw/G/WjYz3IPS32C77Q6GD+x/I+rid9Hy0QKBgHXl\nDNifjFRcUODPHZkWGKmsFmmYu4mWfhN65R478LF9Z2ngh5sOYH63HURSEDVopAQn\nv35UospnnalkI2Tkl1QxDmtgu2Y6xwD4yI2gqNxjo+Z5xSBGcuZiygq9gXyUHO1l\nysFTLasSBQTB1bSkPkuM6B/LboMy8hMOv8GKndIBAoGBANz2FhRM5uojifM9ABhv\nmB21k8vpxJeBlDRrx/fXB2rUD765uepDR8OmBpm5Z9aYlK7FKiTIQ5HTiHO6RRq6\nKLePfDKycM1vpjnmScNjxjw6AKXoAN4La6RiDCy+ot/t5FZscw6aLbvpUjt7gUUy\nfWL2SHjBbQ+2eUqU516kmoUf\n-----END PRIVATE KEY-----\n",
      project_id: "bits-of-code-e7eaa",
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

module.exports = admin.firestore();
