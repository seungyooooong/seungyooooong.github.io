var stack = {
    Xcode: false,
    SwiftUI: false,
    Swift: false,

    VSCode: false,
    VueJS: false,
    JavaScript: false,

    AndroidStudio: false,
    AndroidFramework: false,
    Java: false, 

    Git: false
}

function clickStack(id) {
    $('#' + id + (stack[id] ? 'Text' : 'Icon')).hide()
    $('#' + id + (stack[id] ? 'Icon' : 'Text')).show()
    stack[id] = !stack[id]
}

var portfolio = [{
    title: '공모전 팀원 추천 어플',
    tagList: ['Team Project', 'Android', 'Java'],
    form: 'Android App',
    language: ['Java'],
    content: `공모전에 함께 참여할 팀원을 추천해주는 앱을 개발한 경험이 있습니다.
    프로젝트에서 앱 개발 전체적인 부분을 담당하게 되었는데, 그 당시 장기적으로 프로젝트를 짜고 진행한 경험이 처음이었고 팀 단위로 협업하는 것에 익숙하지 않았습니다. 
    팀원들의 역량도 제대로 파악하지 못하고 있었으며, 협업할 때 어떻게 업무를 나누어야 하는지도 알지 못했습니다. 
    그래서 가장 먼저 앱의 여러 가지 기능들을 작은 단위로 모듈화하였고 회의를 통해 팀원들 각각의 능력에 대해서도 꾸준히 조사하였습니다. 
    그 결과 팀원들의 역량을 파악할 수 있었고 모듈 단위로 팀원들에게 역량에 맞는 업무를 할당하면서 성공적으로 프로젝트를 진행할 수 있었습니다.
    그리고 그 중에서 메인 화면과 메뉴 내비게이션 등을 개발했는데, drawer layout과 view pager등 실무에서 많이 쓰이는 컴포넌트를 다뤄보았습니다.
    추후에 코드를 정리하고 분리하여 컴포넌트화하면 다른 프로젝트에서도 활용할 수 있을만큼 좋은 경험이 되었습니다.`
}, {
    title: 'Alba Drop',
    tagList: ['Android', 'Java'],
    form: 'Android App',
    language: ['Java'],
    content: `달력 컴포넌트, shared preference 사용 & db 설계`
}, {
    title: 'TV APP Renewal',
    tagList: ['TCommerce', 'Vue.js'],
    form: 'TV App',
    language: ['html', 'css', 'javascript'],
    content: `Vue.js를 통해 개발, component, prototype의 개념과 props, mixin, computed등 개념에 대해 익히고 사용`
}, {
    title: 'NICE Mobile',
    tagList: ['WebApp', 'Vue.js'],
    form: 'WebApp',
    language: ['html', 'css', 'javascript'],
    content: `WebApp과 Native App의 차이 이해,`
}, {
    title: 'HIG Reading Series',
    tagList: ['HIG', 'iOS', 'velog'],
    form: 'velog',
    language: ['markdown'],
    content: `애플에서 제공하는 UI 가이드 HIG; Human Interface Guideline을 읽고있습니다.
    처음 iOS 개발을 꿈꾸면서 공부를 위해 여러 자료를 찾아보았는데, 그때 가장 도움이 되었던 자료가 실무자가 HIG를 읽으면서 설명해주는 영상 자료였습니다.
    영상에서는 HIG의 내용을 해석해 읽어주었고 실제로 개발한 경험을 바탕으로 예시도 들어주며 설명해주었는데, 그중에 HIG의 내용을 지키지 않았을 때 해당 사유로 앱 심사에서 리젝당할 수 있다는 것이 가장 기억에 남았습니다.
    이러한 좋은 경험을 다른사람들에게도 전달해주고 싶다고 생각했는데 iOS 버전업에 따라서 HIG의 내용이 계속 갱신되다보니 최신화된 자료를 찾기가 어려웠습니다.
    그래서 최신화된 HIG를 내가 읽고 나름대로 해석도 해서 자료를 남기기로 했고 velog에 공부한 내용을 기록하게 되었습니다.`
}, {
    title: 'NICE for iOS',
    tagList: ['iOS', 'Xcode', 'Swift'],
    form: 'iOS App',
    language: ['Swift'],
    content: `Swift UI 사용, iOS App Store에 App 등록 요청 및 reject 경험`
}]

function initPortfolioModal(index) {
    $("#portfolioModalImage").attr("src", "assets/img/portfolio/" + index + ".jpg")
    $('#portfolioModalTitle').html(portfolio[index].title)
    $('#portfolioModalTag').html(portfolio[index].tagList.join(', '))
    $('#portfolioModalForm').html(portfolio[index].form)
    $('#portfolioModalLanguage').html(portfolio[index].language.join(', '))
    $('#portfolioModalContent').html(newLineInHTML(portfolio[index].content))
}

function newLineInHTML(text) {
    return text.replace(/(\n|\r\n)/g, '<br>')
}