function skillsMember() {
    return {
        restric: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        biindToController: true,
        scope:{
            member: 'm'
        }
    }
}
