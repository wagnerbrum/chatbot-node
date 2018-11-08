const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class EventsController extends TelegramBaseController {
    whatsAction(scope) {
        let msg = 'Whats => (51) 98422-3670';
        scope.sendMessage(msg);
    }
    
    githubAction(scope) {
        let msg = 'GitHub => https://github.com/wagnerbrum';
        scope.sendMessage(msg);
    }

    facebookAction(scope) {
        let msg = 'Facebook => https://www.facebook.com/wagner.brumdasilva';
        scope.sendMessage(msg);
    }

    listarAction(scope) {
        this.whatsAction(scope);
        this.githubAction(scope);
        this.facebookAction(scope);
    }

    groovyAction(scope) {
        let msg = 'Groovy foi um erro! kkk';
        scope.sendMessage(msg);
    }
    
    get routes() {
        return {
            'whats' : 'whatsAction',
            'github' : 'githubAction',
            'facebook' : 'facebookAction',
            'listar' : 'listarAction',
            'groovy' : 'groovyAction'
        }
    }
}

module.exports = EventsController;