const express     = require("express"),
      router      = express.Router();


router.get("/", (req, res)=>{
    res.render("index");
});


/*----------------------- Default Route --------------------------- */

router.get("*", function(req, res){
    res.send("wrong URL!!!");
});

/*----------------------------------------------------------------- */



module.exports = router;