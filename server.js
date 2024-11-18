const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const campaigns = [
    {
      "id": 1,
      "title": "Warm Hearts Dhaka",
      "image": "https://i.ibb.co.com/sPX0z1s/11.jpg",
      "description": "Collecting winter clothes for underprivileged communities in Dhaka.",
      "status": "Ongoing",
      "contactInfo": "warmhearts.dhaka@example.com",
      "division": "Dhaka"
    },
    {
      "id": 2,
      "title": "Chill-Free Sylhet",
      "image": "https://i.ibb.co.com/SXf1F0C/3.jpg",
      "description": "Helping remote villages in Sylhet to face winter with dignity.",
      "status": "Ongoing",
      "contactInfo": "chillfree.sylhet@example.com",
      "division": "Sylhet"
    },
    {
      "id": 3,
      "title": "Rajshahi Warm Drive",
      "image": "https://i.ibb.co.com/VBkR0nB/8.jpg",
      "description": "Providing blankets and warm clothes to families in Rajshahi.",
      "status": "Completed",
      "contactInfo": "rajshahiwarmdrive@example.com",
      "division": "Rajshahi"
    },
    {
      "id": 4,
      "title": "Winter Help Chattogram",
      "image": "https://i.ibb.co.com/GJVL9dS/6.jpg",
      "description": "A campaign to collect and distribute winter essentials in Chattogram.",
      "status": "Ongoing",
      "contactInfo": "winterhelp.ctg@example.com",
      "division": "Chattogram"
    },
    {
      "id": 5,
      "title": "Cold Relief Barishal",
      "image": "https://i.ibb.co.com/DbBXqZ9/13.jpg",
      "description": "Spreading warmth to the less fortunate in Barishal.",
      "status": "Ongoing",
      "contactInfo": "coldrelief.barishal@example.com",
      "division": "Barishal"
    },
    {
      "id": 6,
      "title": "Winter Essentials Mymensingh",
      "image": "https://i.ibb.co.com/WyXQFWc/5.jpg",
      "description": "Ensuring no one in Mymensingh faces winter unprepared.",
      "status": "Ongoing",
      "contactInfo": "winteressentials.mymensingh@example.com",
      "division": "Mymensingh"
    },
    {
      "id": 7,
      "title": "Khulna Warm Campaign",
      "image": "https://i.ibb.co.com/4MbZGDg/1.jpg",
      "description": "Distributing warm clothes to fishermen and laborers in Khulna.",
      "status": "Ongoing",
      "contactInfo": "khulnawarmcampaign@example.com",
      "division": "Khulna"
    },
    {
      "id": 8,
      "title": "Winter Smiles Rangpur",
      "image": "https://i.ibb.co.com/25MHJSG/2.jpg",
      "description": "Bringing smiles to Rangpur’s children with winter donations.",
      "status": "Ongoing",
      "contactInfo": "wintersmiles.rangpur@example.com",
      "division": "Rangpur"
    },
    {
      "id": 9,
      "title": "Dhaka Blanket Project",
      "image": "https://i.ibb.co.com/fMpk9jH/4.jpg",
      "description": "Providing blankets to the homeless in Dhaka city.",
      "status": "Completed",
      "contactInfo": "dhakablanketproject@example.com",
      "division": "Dhaka"
    },
    {
      "id": 10,
      "title": "Sylhet Warmth Drive",
      "image": "https://i.ibb.co.com/swtqRRm/10.jpg",
      "description": "Helping Sylhet's tea garden workers combat the cold.",
      "status": "Ongoing",
      "contactInfo": "sylhetwarmthdrive@example.com",
      "division": "Sylhet"
    },
    {
      "id": 11,
      "title": "Rajshahi Blanket Aid",
      "image": "https://i.ibb.co.com/Ptws2SZ/15.png",
      "description": "Spreading warmth in Rajshahi's northern villages.",
      "status": "Ongoing",
      "contactInfo": "rajshahiblanketaid@example.com",
      "division": "Rajshahi"
    },
    {
      "id": 12,
      "title": "Chattogram Cold Relief",
      "image": "https://i.ibb.co.com/QFRqLv5/7.jpg",
      "description": "Supporting rural families in Chattogram to stay warm.",
      "status": "Completed",
      "contactInfo": "ctgcoldrelief@example.com",
      "division": "Chattogram"
    },
    {
      "id": 13,
      "title": "Barishal Cozy Hands",
      "image": "https://i.ibb.co.com/4tFzF0v/9.jpg",
      "description": "Distributing gloves and scarves to children in Barishal.",
      "status": "Ongoing",
      "contactInfo": "barishalcozyhands@example.com",
      "division": "Barishal"
    },
    {
      "id": 14,
      "title": "Warmth for Mymensingh",
      "image": "https://i.ibb.co.com/c271Tmg/12.jpg",
      "description": "Donating winter clothes to farmers in Mymensingh.",
      "status": "Ongoing",
      "contactInfo": "warmthmymensingh@example.com",
      "division": "Mymensingh"
    },
    {
      "id": 15,
      "title": "Warm Rays Khulna",
      "image": "https://i.ibb.co.com/fpPBmGt/14.jpg",
      "description": "Reaching the needy in Khulna with warmth and hope.",
      "status": "Ongoing",
      "contactInfo": "warmrays.khulna@example.com",
      "division": "Khulna"
    }
  ]
  

app.get("/campaigns", (req, res) => {
    res.json(campaigns);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
