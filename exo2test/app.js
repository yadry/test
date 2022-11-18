const users = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "17/05/2019 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "17/05/2019 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "17/05/2019 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "17/05/2019 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "17/05/2019 10:00 AM",
      isLoggedIn: false,
    },
  ];
  
  const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
        { userId: "Afaf", rate: 2 },
      ],
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ];



  // 1: signUp function:

  function signUp(newUser, users) {
    // check if the user already exists
    const userExists = users.find((u) => u.email === newUser.email);
  
    if (userExists) {
      return {
        success: false,
        message: "User already exists",
      };
    }
  
    // if user doesn't exist, add new user
    const NewUser = {
      _id: Math.random().toString(36).substr(2, 9),
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      createdAt: new Date().toLocaleString(),
    };
    users.push(NewUser);
    return {
      success: true,
      user: NewUser,
    };
  }
  const newUser = {
    username: "Ryad",
    email: "ryad@gmail.com",
    password: "********",
  };
  
  //2: SignIn function:

  console.log(signUp(newUser,users ));
  console.log(signUp(newUser,users ));

  function signIn(users, user) {
    // check if the user exists
    const userExists = users.find((u) => u.email === user.email);
    if (!userExists) {
      return {
        success: false,
        message: "User does not exist",
      };
    }
    // if user exists, check if password is correct
    if (userExists.password === user.password) {
      return {
        success: true,
        user: userExists,
        message: "User logged in",
      };
    }
    return {
      success: false,
      message: "Password is incorrect",
    };
  }

  console.log(signIn(users, newUser));

    //2: rateProduct function:

    function rateProduct(productId, userId, rate) {
        const userExists = users.find((u) => u._id === userId);
        if (!userExists) {
          return {
            success: false,
            message: "User does not exist",
          };
        }
        const productExists = products.find((u) => u._id === productId);
        if (!productExists) {
          return {
            success: false,
            message: "Product does not exist",
          };
        } else {
          products.map((u) => {
            if (u._id == productId) {
              u.ratings.push({ userId: userId, rate: rate });
            }
          });
        }
      }
      rateProduct("hedfcg", "ghderc", 5);
      console.log(products);




  // 3: averageRating funtion:

  function averagerating(utilisateur, userid) {
    // check if the user exists 
    const userExist = utilisateur.find((u) => u._id === userid);
    if (!userExist) {
      return {
        success: false,
        message: "User does not exist",
      };
    }
    let sum = 0;
    let count = 0;
    userExist.ratings.forEach((r) => {
      sum += r.rate;
      count++;
    });
    return {
      success: true,
      average: sum / count,
    };
  }
  console.log(averagerating(products, "eedfcf"));


  // 5: likeProduct function:

  function likeProduct(productId, userId) {
   
    const userExists = users.find((u) => u._id === userId);
    if (!userExists) {
      return {
        success: false,
        message: "User does not exist",
      };
    }
    const productExists = products.find((u) => u._id === productId);
    if (!productExists) {
      return {
        success: false,
        message: "Product does not exist",
      };
    } else {
      products.map((u) => {
        if (u._id == productId) {
          u.likes.push(userId);
        }
      });
    }
  }
  likeProduct("hedfcg", "ghderc");
  console.log(products);