import ecsFormat from '@elastic/ecs-winston-format';
import * as winston from 'winston';

const { NODE_ENV, SERVICE_VERSION,  APPLICATION_NAME } = process.env;

winston.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'blue',
    http: 'gray',
    debug: 'white',
});

const Logger = winston.createLogger({
    level: 'debug',
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        debug: 4,
    },
    format: ecsFormat(),
    transports: [new winston.transports.Console()],
    defaultMeta: {
        application: 'Wall Draw Studio',
        enviorment: NODE_ENV,
        service_version: SERVICE_VERSION,
        application_name: APPLICATION_NAME,
    },
});

export { Logger };
