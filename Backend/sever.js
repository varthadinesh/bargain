const express = require("express");
const mysql = require("mysql");
const db = require("./db");
const {
  createDatabaseQuery,
  createRegisterTableQuery,
  useDatabaseQuery,
  Womenproducts,
  kidproducts,
  jewelleryproducts,
  booksproducts,
} = require("./queries");
const cors = require("cors");
const app = express();
app.use(cors("*"));
app.use(express.json());

var nodemailer = require("nodemailer");

let savedOTPS = {};

var smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: process.env.REACT_APP_USER, // Your gmail address.
    // Not @developer.gserviceaccount.com
    clientId: process.env.REACT_APP_CLIENTID,
    clientSecret: process.env.REACT_APP_CLIENTSECRET,
    refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
  },
});

app.post("/sendotp", (req, res) => {
  let email = req.body.email;
  let digits = "0123456789";
  let limit = 4;
  let otp = "";
  for (i = 0; i < limit; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  var mailOptions = {
    from: process.env.REACT_APP_FROMMAIL,
    to: `${email}`,
    subject: "Verification mail to register for punarvi fashion",
    generateTextFromHTML: true,
    html: `<b>Hello user, Please use this otp ${otp} for verification</b>`,
  };

  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      // console.log(error);
      response.send("couldn't send");
    } else {
      savedOTPS[email] = otp;
      setTimeout(() => {
        delete savedOTPS.email;
      }, 60000);
      // console.log(response);
      return res.json(response);
    }
    smtpTransport.close();
  });
});

app.post("/verify", (req, res) => {
  let otprecived = req.body.otp;
  let email = req.body.email;
  if (savedOTPS[email] == otprecived) {
    res.send("Verfied");
  } else {
    res.status(500).send("Invalid OTP");
  }
});

db.query(createDatabaseQuery, (err) => {
  if (err) throw err;

  db.query(useDatabaseQuery, (err) => {
    if (err) throw err;

    db.query(createRegisterTableQuery, (err) => {
      if (err) throw err;
      db.query(Womenproducts, (err) => {
        if (err) throw err;
        db.query(kidproducts, (err) => {
          if (err) throw err;
          db.query(jewelleryproducts, (err) => {
            if (err) throw err;
            db.query(booksproducts, (err) => {
              if (err) throw err;
              console.log("Database and tables created successfully");
            });
          });
        });
      });
    });
  });
});

app.get("/women", (req, res) => {
  const sql = "select * from women";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});
//kids
app.get("/kids", (req, res) => {
  const sql = "select * from kids";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});
//jewellery
app.get("/jewellery", (req, res) => {
  const sql = "select * from jewellery";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

///books
app.get("/books", (req, res) => {
  const sql = "select * from books";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});
app.post("/addproducts", (req, res) => {
  const sql =
    "INSERT INTO women (`category`,`name`,`description`,`image`,`location`,`color`,`alteration`,`size`,`measurements`,`worn`,`price`) VALUES (?)";
  const values = [
    req.body.category,
    req.body.productname,
    req.body.productdescription,
    req.body.productimageurl,
    req.body.location,
    req.body.color,
    req.body.alteration,
    req.body.size,
    req.body.measurements,
    req.body.worn,
    req.body.price,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

app.post("/register", (req, res) => {
  const sql =
    "INSERT INTO register (`firstname`,`lastname`,`email`,`password`,`phone` ) VALUES (?)";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.password,
    req.body.phone,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

app.post("/");
app.listen(8080, () => {
  console.log("listening");
});
