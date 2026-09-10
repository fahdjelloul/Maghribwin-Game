# 📡 API Documentation

## Base URL

```
https://ais-pre-phurnfuyydtwskonaqmg62-14440813703.europe-west2.run.app/api
```

---

## 🎮 Endpoints

### Get Games

```
GET /games
```

**Response:**
```json
{
  "success": true,
  "games": [
    {
      "id": "memory",
      "name": "Memory Game",
      "description": "لعبة الذاكرة"
    }
  ]
}
```

### Get Game Details

```
GET /games/:gameId
```

### Start Game

```
POST /games/:gameId/start
```

### Submit Score

```
POST /games/:gameId/score
Body: { score: number }
```

---

## 📊 User Endpoints

### Get User Stats

```
GET /users/:userId/stats
```

### Update Profile

```
PUT /users/:userId
Body: { name, avatar, bio }
```

---

## ⚡ Status Codes

| Code | Meaning |
|------|----------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Server Error |

