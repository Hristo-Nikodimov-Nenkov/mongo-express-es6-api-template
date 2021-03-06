export default function (app) {
    if (process.env.NODE_ENV === 'production') {
        app.use((req, res, next) => {
            if (req.header('x-forwarded-proto') !== 'https')
                res.redirect(`https://${req.header('host')}${req.url}`);
            else
                next()
        })
    }
}