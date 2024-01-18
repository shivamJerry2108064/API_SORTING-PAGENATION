const Product= require("../models/product");

module.exports.getAllProducts = async(req,res)=>{

    const { company,name,featured,sort,select} =req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    }
    if(featured){
        queryObject.featured = featured;
    }
    if(name){
        queryObject.name= { $regex: name , $options:"i"};
    }


    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.replace("," , " ");
        apiData= apiData.sort(sortFix);
    }

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData= apiData.select(selectFix);
    }

    //pagenation
    let page= Number(req.query.page) || 1;
    let limit =Number(req.query.limit) || 3;

    let skip= (page-1)*limit;
    apiData = apiData.skip(skip).limit(limit);


    const myData= await apiData;
    res.status(200).json({myData , nbhits: myData.length});
};

