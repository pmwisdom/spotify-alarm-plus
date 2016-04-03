ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "a2b79f0caa454ae6b106446a32235c30",
      "secret": "ba3bc708589644b2add238912bf2ab94"
    }
  },
  { upsert: true }
);