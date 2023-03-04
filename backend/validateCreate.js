const validateCreate = userData => {
    let nameFlag = true, emailFlag = true, phoneNumberFlag = true;
    if(userData.name.length < 3 || userData.name.length > 25) nameFlag = false;
    const emailParts = userData.email.split("@");
    if(emailParts.length != 2 || emailParts[1].length < 4) emailFlag = false;
    if(userData.phoneNumber.length != 11 || Number(userData.phoneNumber) == NaN) phoneNumberFlag = false; 
    return {
        name:        nameFlag,
        email:       emailFlag,
        phoneNumber: phoneNumberFlag
    }
}

module.exports = validateCreate;