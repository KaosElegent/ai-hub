const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONN);


let Schema = mongoose.Schema;

let authUserSchema = new Schema({
    email: String,
    name: String,
    institute: String,
})

const Authorized_user = mongoose.models.authorized_users || mongoose.model('authorized_users', authUserSchema);

export async function checkAuth(email:string) {
    const authorized_user = await Authorized_user.find({email:email}).exec();
    return authorized_user.length && 1;
}
