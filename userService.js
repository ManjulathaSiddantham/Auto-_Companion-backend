var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec()
        .then(result => {
            return result;
        })
        .catch(error => {
            throw error;
        });
}
 module.exports.createUserDBService = (userDetails) => {
    return new Promise(function(resolve, reject) {
        var userModelData = new userModel(userDetails); 
        userModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                reject(false);
            });
    });
}

module.exports.updateUserDBService = (id, userDetails) => {
    return userModel.findByIdAndUpdate(id, userDetails).exec()
        .then(result => {
            return result;
        })
        .catch(error => {
            throw error;
        });
}
module.exports.removeUserDBService = (id) => {
    return userModel.findByIdAndDelete(id).exec()
        .then(result => {
            return result;
        })
        .catch(error => {
            throw error;
        });
}



// console.log("szxdcfv");
// console.log("sdihjb ");
// console.log("cfvgsbcha");