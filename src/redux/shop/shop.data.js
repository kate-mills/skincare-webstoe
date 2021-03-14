//normalize data
const DATA = {
  cleansers: {
    id: 1,
    title: 'Cleansers',
    routeName: 'cleansers',
    items: [
      {
        id: 101,
        name: 'Pore Clearing Cleansing Oil',
        imageUrl: 'https://i.ibb.co/MnJ7QV1/pccoil-retail.jpg',
        price: 25
      },
      {
        id: 102,
        name: 'Pore Purifying Cleanser',
        imageUrl: 'https://i.ibb.co/Z2WVxpL/ppc-retail.jpg',
        price: 25,
      },
      {
        id: 103,
        name: 'Restorative Creamy Cleanser',
        imageUrl: 'https://i.ibb.co/tDvVWJD/rcc-retail.jpg',
        price: 25
      },
      {
        id: 104,
        name: 'Hydrating Face Wash',
        imageUrl: 'https://i.ibb.co/z5vTn96/hfw-retail.jpg',
        price: 25
      },
      {
        id: 105,
        name: 'Gentle Cleansing Mils',
        imageUrl: 'https://i.ibb.co/89TQ7hT/gcm-retail.jpg',
        price: 18
      },
      {
        id: 106,
        name: 'Corrective Salicylic Cleanser',
        imageUrl: 'https://i.ibb.co/Z1hj6hY/csc-retail-1.jpg',
        price: 18
      },

    ]
  },
  specialty: {
    id: 2,
    title: 'Specialty',
    routeName: 'specialty',
    items: [
      {
        id: 101,
        name: 'Glycolic Cream',
        imageUrl: 'https://i.ibb.co/HBfL6wR/glycolic-cream.jpg',
        price: 35
      },
      {
        id: 202,
        name: 'Purifying Oxygen Lotion',
        imageUrl: 'https://i.ibb.co/4RzBbLr/pur-Oxy-retail-3.jpg',
        price: 35
      },
      {
        id: 203,
        name: 'Vitamin C Powder',
        imageUrl: 'https://i.ibb.co/wy1R7hV/vitpwd-retail.jpg',
        price: 35
      },
      {
        id: 204,
        name: 'Balance Essential Oil Blend',
        imageUrl: 'https://i.ibb.co/BfXxP8c/balance.jpg',
        price: 35
      },
      {
        id: 205,
        name: 'Plump Me Up Hydrating Mist',
        imageUrl: 'https://i.ibb.co/zHw7Cbg/hmist-retail.jpg',
        price: 25
      },
      {
        id: 206,
        name: 'Pore Purifying Toner',
        imageUrl: 'https://i.ibb.co/m42BpKx/ppt-retail.jpg',
        price: 20
      },
    ]
  },
  serums: {
    id: 3,
    title: 'Serums',
    routeName: 'serums',
    items: [
      {
        id: 301,
        name: 'Blemish Be Gone',
        imageUrl: 'https://i.ibb.co/HPPb2Wk/bbg-retail.jpg',
        price: 35
      },
      {
        id: 302,
        name: 'Brighten & Restore Complex',
        imageUrl: 'https://i.ibb.co/6Wnn5SK/bandr.jpg',
        price: 35
      },
      {
        id: 303,
        name: 'Calm, Nourish & Repair Oil',
        imageUrl: 'https://i.ibb.co/4dLfnCX/cnr-retail.jpg',
        price: 35
      },
      {
        id: 304,
        name: 'Calming Serum',
        imageUrl: 'https://i.ibb.co/23MyR0w/calming-serum.jpg',
        price: 35
      },
      {
        id: 305,
        name: 'Glycolic Age Defying Serum',
        imageUrl: 'https://i.ibb.co/74c3wb2/glycolic-retail.jpg',
        price: 35
      },
      {
        id: 306,
        name: 'Hyaluronic Plumping Serum',
        imageUrl: 'https://i.ibb.co/KKRSKPC/hyal-retail.jpg',
        price: 35
      },
      {
        id: 307,
        name: 'Licorice Root Additive',
        imageUrl: 'https://i.ibb.co/jvFYNcP/licorice.jpg',
        price: 35
      },
      {
        id: 308,
        name: 'Lipid Replenishing Drops',
        imageUrl: 'https://i.ibb.co/Jr1nFwN/lipid-retail.jpg',
        price: 35
      },
      {
        id: 309,
        name: 'Prime & Protect Serum',
        imageUrl: 'https://i.ibb.co/3msMNHN/pprotect-retail.jpg',
        price: 35
      },
      {
        id: 310,
        name: 'Rejuvenating Peptide & Stem Cell Serum',
        imageUrl: 'https://i.ibb.co/LRQnDys/rejpepserum-retail.jpg',
        price: 35
      },
      {
        id: 311,
        name: 'Vitamin C Serum Plus',
        imageUrl: 'https://i.ibb.co/QXDyN53/vit-c.jpg',
        price: 35
      },
    ]
  },
  eyeslips: {
    id: 4,
    title: 'Eyes & Lips',
    routeName: 'eyeslips',
    items: [
      {
        id: 401,
        name: 'Peptide Rich & Radiant Eye Cream',
        imageUrl: 'https://i.ibb.co/Lvhxj9M/rareye-retail.jpg',
        price: 25
      },
      {
        id: 402,
        name: 'Plump & Renew Lip Balm',
        imageUrl: 'https://i.ibb.co/0JJcQjz/prlip-retail.jpg',
        price: 20
      },
      {
        id: 403,
        name: 'Revitalizing Peptide & Stem Cell Eye Gel',
        imageUrl: 'https://i.ibb.co/4KdScL9/reveyegel-dpr-pump.jpg',
        price: 20
      },
    ]
  },
  moisturizers: {
    id: 5,
    title: 'Moisturizers',
    routeName: 'moisturizers',
    items: [
      {
        id: 501,
        name: 'Clarifying Moisturizer',
        imageUrl: 'https://i.ibb.co/QHfb3D9/clarifying-moisturizer.jpg',
        price: 20
      },
      {
        id: 502,
        name: 'Hydrating Moisture Cream',
        imageUrl: 'https://i.ibb.co/qnNpJ1w/hydrating-moisture-cream.jpg',
        price: 25
      },
      {
        id: 503,
        name: 'Oil-Free Moisturizer',
        imageUrl: 'https://i.ibb.co/cN0dhJy/oil-free.jpg',
        price: 25
      },
      {
        id: 504,
        name: 'Calming Moisture Cream',
        imageUrl: 'https://i.ibb.co/HCjMvPz/calming-moisture-cream-retail.jpg',
        price: 25
      },
      {
        id: 505,
        name: 'Ultra Rich Moisture Cream',
        imageUrl: 'https://i.ibb.co/cL07G8V/ultra-Rich-retail.jpg',
        price: 325
      },
      {
        id: 506,
        name: 'Ultimate Hydration Gel',
        imageUrl: 'https://i.ibb.co/TY4Wnnk/ulthyd.jpg',
        price: 25
      },
      {
        id: 507,
        name: 'Moisturizing SPF 30',
        imageUrl: 'https://i.ibb.co/8bs6Y8J/spf30.jpg',
        price: 25
      },
      {
        id: 508,
        name: 'Purifying Oxygen Lotion',
        imageUrl: 'https://i.ibb.co/4RzBbLr/pur-Oxy-retail-3.jpg',
        price: 25
      },
      {
        id: 509,
        name: 'Vitamin A & E Hand & Body Lotion',
        imageUrl: 'https://i.ibb.co/SB19xMP/handbody-retail.jpg',
        price: 25
      },
      {
        id: 510,
        name: 'Moisturizing SPF 30 Complexion Corrector',
        imageUrl: 'https://i.ibb.co/NF9ssw6/spf30-tints.jpg',
        price: 40
      },
    ]
  }
};

export default DATA;
