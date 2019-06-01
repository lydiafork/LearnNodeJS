module.exports = {
    apps : [{
        name: 'demo02',
        script: 'index.js',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        args: 'one two',
        instances: 1,
        autorestart: true,
        watch: true, // 启用或禁用观察模式	
	    output: './out.log', // studout的文件路径（每行都附加到该文件中) ~/.pm2/logs/-out.log
        error: './error.log', // stderr的文件路径（每行都附加到此文件中） ~/.pm2/logs/-error.err
        log: './combined.outerr.log',
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        },
    }],
    deploy : {
        development:{

        },
        production : {
            user : 'node',
            host : '212.83.163.1',
            ref  : 'origin/master',
            repo : 'git@github.com:repo.git',
            path : '/var/www/production',
            'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
        },
    }
};
