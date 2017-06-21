var _appWrapper = window.getAppWrapper();
var appState = _appWrapper.getAppState();

exports.component = {
    name: 'app-main',
    template: '',
    data: function () {
        return appState.mainData;
    },
    methods: {
        testMessage: function(e){
            let type = e.target.getAttribute('data-type');
            let messageType = type;
            let types = ['debug', 'info', 'warning','error'];
            let count = e.target.getAttribute('data-count');
            for (let i=0; i<count; i++){
                if (type == 'random'){
                    messageType = types[Math.floor(Math.random()*types.length)];
                }
                _appWrapper.getHelper('component').addUserMessage('message', messageType, [], false, true, true, true);
            }
        }
    },
    computed: {
        appState: function(){
            return appState;
        }
    }
};