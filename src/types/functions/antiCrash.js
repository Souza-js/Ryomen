module.exports = (client) => {
    process.on('unhandledRejection', (reason, p) => {
        console.error('[antiCrash] :: Unhandled Rejection/Catch');
        console.error(reason, p);
    });

    process.on('uncaughtException', (err, origin) => {
        console.error('[antiCrash] :: Uncaught Exception/Catch');
        console.error(err, origin);
    });

    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.error('[antiCrash] :: Uncaught Exception/Catch (MONITOR)');
        console.error(err, origin);
    });

    process.on('multipleResolves', (type, promise, reason) => {
        console.error('[antiCrash] :: Multiple Resolves');
    });
}