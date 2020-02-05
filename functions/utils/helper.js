
const isEmpty = (string) => {
    if (string.trim() === '') {
        return true;
    } else {
        return false;
    }

}

const isEmail = (email) => {
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regx)) {
        return true
    } else {
        return false
    }
}


const isValidMobile = (num) => {

    let response = {};
    response.status = false;

    if (isNaN(num) || num.indexOf(" ") != -1) {
        response.status = true;
        response.message = "The phone number is invalid!";
        return response;
    }

    if (num.length > 10 || num.length < 10) {

        response.status = true;
        response.message = "Mobile No. should be 10 digit!";
        return response;


    }
    if (!(num.charAt(0) == "9")) {
        response.status = true;
        response.message = "Mobile No. must start with letter 9";
        return response;
    }
    return response;
}

exports.validateSignUPData = (data) => {


    let errors = {};
    if (isEmpty(data.firstName)) {
        errors.firstName = "FirstName Filed Is Required!"


    } else if (isEmpty(data.lastName)) {
        errors.lastName = "LastName Filed Is Required!"


    }
    else if (isEmpty(data.email)) {
        errors.email = "Email Filed Is Required!"

    } else if (!isEmail(data.email)) {
        errors.email = "Must be valid email address";

    }

    if (data.password !== data.confirmPassword) {
        errors.confirmPassword = "Password Did not match";
    }

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}


exports.validateLoginData = (data) => {
    let errors = {}

    if (isEmpty(data.email)) {
        errors.email = "Email filed is required!"
    } else if (isEmpty(data.password)) {
        errors.password = "Password filed is required!"

    } else if (!isEmail(data.email)) {
        errors.email = "Must be valid email address"

    }

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.validateProfileData = (data) => {
    let errors = {}
    let response = {};

    if (!data.firstName) {
        errors.firstName = "FirstName filed is required!"
    }

    if (!data.lastName) {
        errors.lastName = "LastName filed is required!"

    }

    if (data.phone) {
        response = isValidMobile(data.phone)
        if (response.status)
            errors.phone = response.message
    }

    if (data.emergencyContactNumber) {

        response = isValidMobile(data.emergencyContactNumber)

        if (response.status)
            errors.emergencyContactNumber = response.message;

    }

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}


exports.reduceUserDetails = (req) => {
    let data = req.body;
    let profileDetails = {};
    if (data.firstName)
        profileDetails.firstName = data.firstName
    if (data.lastName)
        profileDetails.lastName = data.lastName

    if (data.phone)
        profileDetails.phone = data.phone

    if (data.gender)
        profileDetails.gender = data.gender

    if (data.birthday)
        profileDetails.birthday = data.birthday

    if (data.city)
        profileDetails.city = data.city

    if (data.province)
        profileDetails.province = data.province

    if (data.emergencyContactName)
        profileDetails.emergencyContactName = data.emergencyContactName

    if (data.newPhotoURL)
        profileDetails.newPhotoURL = data.newPhotoURL

    if (data.emergencyContactNumber)
        profileDetails.emergencyContactNumber = data.emergencyContactNumber

    return profileDetails;



}



// const uploadImage = async (imageObject) => {
//     console.log("Image Object", JSON.stringify(imageObject));
//     const ref = firebase
//         .storage()
//         .ref()
//         .child(`images/users/${req.user.userId}/${req.user.userId}.png`);
//     await ref.put(imageObject);
//     url = await ref.getDownloadURL();
//     return url;





// }



