const mailer = require('nodemailer')

const transport = {
    service: 'Gmail', // service email
    auth: {
        user: '', // user email
        pass: '' // password
    }
}

const smtpTransport = mailer.createTransport(transport)
const option = {
    from: 'Abang ganteng <kunhernowoputra@gmail.com>',
    to: 'kunhernowoputra@gmail.com',
    subject: 'Hello',
    html: '<h1> Coba send email melalui nodejs',
    attachments: [{
        filename: 'Logo',
        path: 'nm_logo_200x136.png'
    }]
}
smtpTransport.sendMail(option, (err, info) => {
    err ? console.log(err) : console.log(info)
})

