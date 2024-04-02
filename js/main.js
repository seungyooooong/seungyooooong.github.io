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
    tagList: ['Team Project', 'Android'],
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
    tagList: ['Toy Project', 'Android'],
    form: 'Android App',
    language: ['Java'],
    content: `1인 프로젝트로 요구사항 분석부터 앱 개발까지 진행해본 경험이 있습니다.
    학부생 시절 아르바이트하던 카페 사장님들은 따로 매니저를 두지 않으시고 두 분이 3개의 가게를 운영하셨습니다.
    그러던 중 아르바이트생이 자기가 출근, 퇴근한 시간을 입력하여 업무 시간을 기록하는 앱은 있는데 사장이 아르바이트생들의 근무 시간을 기록하고 그에 따라 월급을 계산해주는 앱은 없다며 간단하게라도 만들어달라고 부탁하셨습니다.
    가장 먼저 요구사항을 정리하고 앱의 형태와 구조를 결정하였습니다.
    달력 구조의 뷰를 구성하기 위해 컴포넌트 단위로 설계하고 개발하였으며, 이 때 생명주기에 대해서 충분히 고려하고 컴포넌트를 구분해야한다는 사실을 배웠습니다.
    shared preference를 이용해 데이터를 저장, 관리하였으며 db 설계도 직접 하면서 화면과 데이터의 연동을 위해 고려해야하는 부분 등 앱 개발의 전반적인 부분에서 많이 공부하게 되는 좋은 경헙이었습니다.
    이 경험을 통해 개념을 공부하고 과제에 적용하는 학부과정은 실전과 많이 다를 수 있다는 것을 깨달았습니다.
    그래서 이후에 공부할 때 이론적으로 이해하는 것에서 공부를 끝내지 않고 실전에 어떻게 적용되는지 조금 더 깊게 파고들고 생각하는 좋은 공부 습관이 생겼습니다.
    이러한 습관은 앞으로 많은 것을 배워야 하는 처지인 저에게 강점이면서 동시에 경쟁력이 될 수 있다고 생각합니다.`
}, {
    title: 'T-Commerce Service App 개발',
    tagList: ['T-Commerce', 'Vue.js'],
    form: 'TV App',
    language: ['html', 'css', 'javascript'],
    content: `Aircode에 근무하면서 Vue.js를 이용해 T-Commerce Service App을 개발하였습니다.
    TV App이라는 특징이 있고, 회사 내부 Framework를 일부 사용하긴 하지만 전체적으로 WebView라는 틀 안에서 Vue.js를 사용하기 때문에 일반적인 웹 개발 경험과 유사하게 Vue.js의 다양한 기능에 대해서 익힐 수 있었습니다.
    대표적으로 component, prototype의 개념과 props, mixin, computed등 개념에 대해 익히고 사용하였는데, Vue라는 프레임워크에 대한 이해도 뿐만 아니라 프론트엔드 개발에 대한 전반적인 이해도를 높일 수 있었습니다.
    가장 핵심이 되는 부분은 MVVM패턴이라고 느껴졌는데 개념적으로는 알고 있었지만 실제 개발에 적용해보면서 Model, View, ViewModel이 각각 무엇인지 정확하게 알게되었고,
    이들을 분리했을 때 장단점에 대해 직접 부딪히며 배울 수 있어 좋았습니다.`
}, {
    title: 'NICE Mobile',
    tagList: ['WebApp', 'Vue.js'],
    form: 'WebApp',
    language: ['html', 'css', 'javascript'],
    content: `회사에서 B2B사업으로 관리자 앱을 WebApp형태로 개발하는 프로젝트를 진행했는데, 모바일 개발 분야로 회사에 지원했었던 이력 덕분에 해당 프로젝트를 참여하는 기회를 잡을 수 있었습니다.
    학부생 시절과 취업 준비 시절에는 Native App 개발 위주로 공부하고 준비했기 때문에 WebApp 개발 자체는 처음 참여하는 것이었고, 회사에서 경험한 프로젝트 또한 WebView를 사용하긴 하지만 기본적으로 TV App이라는 특징을 가지기 때문에 Web 개발 스킬도 약간 자신 없는 상태로 프로젝트를 시작하게 되었습니다.
    하지만 프로젝트를 진행하면서 오히려 기존 경험들 덕분에 WebApp, Web, Native App의 차이를 이해할 수 있었고 생각보다 할만하게 느껴졌습니다.
    모바일이라는 환경의 하드웨어적인 조건과 제한, 컨트롤 등을 고려하면서 Vue.js로 작업하는 경험은 익숙한듯 새로웠고 기존에 고려하지 못했던 점까지 짚고 넘어가게 되어 더 많이 배울 수 있었습니다.`
}, {
    title: 'HIG Reading Series',
    tagList: ['HIG', 'iOS', 'velog'],
    form: 'velog',
    link: 'https://velog.io/@chadange',
    language: ['markdown'],
    content: `애플에서 제공하는 UI 가이드 HIG; Human Interface Guideline을 읽고있습니다.
    처음 iOS 개발을 꿈꾸면서 공부를 위해 여러 자료를 찾아보았는데, 그때 가장 도움이 되었던 자료가 실무자가 HIG를 읽으면서 설명해주는 영상 자료였습니다.
    영상에서는 HIG의 내용을 해석해 읽어주었고 실제로 개발한 경험을 바탕으로 예시도 들어주며 설명해주었는데, 그중에 HIG의 내용을 지키지 않았을 때 해당 사유로 앱 심사에서 리젝당할 수 있다는 것이 가장 기억에 남았습니다.
    이러한 좋은 경험을 다른사람들에게도 전달해주고 싶다고 생각했는데 iOS 버전업에 따라서 HIG의 내용이 계속 갱신되다보니 최신화된 자료를 찾기가 어려웠습니다.
    그래서 최신화된 HIG를 직접 읽고 나름대로 해석해 리뷰도 추가하여 자료를 남기기로 했고 velog에 공부한 내용을 기록하게 되었습니다.
    처음에는 단순히 번역만 한다고 생각해 예상 소요 시간을 길게 잡지 않았지만 막상 읽다보니 관련 자료도 더 찾아보게 되고 내용을 정리하고 리뷰도 남기다보니 생각보다 시간이 더 많이 들었습니다.
    하지만 그만큼 많이 배울 수 있었는데, 알고 있던 내용에 대해 읽을 때도 관련 경험들을 떠올리면서 다시 정리할 수 있는 기회가 될 수 있었고, 잘 모르는 분야에 대해서는 간접적으로 배우기도 하고 추가 자료를 찾아보기도 하면서 큰 공부가 되었습니다.`
}, {
    title: 'iOS App Dev Tutorials',
    tagList: ['iOS', 'Xcode', 'SwiftUI', 'UIKit'],
    form: 'iOS App',
    link: 'https://github.com/seungyooooong/iOS-App-Dev-Tutorials',
    language: ['Swift'],
    content: `애플에서 제공하는 공식 문서 중 iOS App Dev Tutorials를 통해 개발 공부 및 실습을 하였습니다.
    총 3가지 앱을 개발하였는데, Scrumdinger라는 이름의 SwiftUI를 이용해 만든 회의 기록 앱과
    UIKit을 이용해 아이폰의 기본 앱인 미리 알림과 연동시켜 만든 Today,
    Network 통신을 해서 외부 API로부터 json형태로 데이터를 받아와 지진 정보를 보여주는 Earthquake를 개발하였습니다.
    Swift의 경우 사용한지 오래되지 않은 언어이다보니 자료가 부족하다고 느껴져 어떻게 공부를 시작해야 할지 고민했었는데, 애플에서 제공하는 좋은 양질의 실습 자료를 찾게 되었고
    이를 통해 SwiftUI와 UIKit는 화면을 구성하는 방법부터가 다르다는 것, 내부의 다른 앱으로부터 데이터를 연동하는 방법, 외부 API에서 데이터를 받아오는 법 등 다양한 부분을 재밌게 배울 수 있었습니다.
    뿐만 아니라 애플에서 제공하는 공식 문서인 만큼 애플이 추구하는 앱의 접근성이나 코드의 구성에 대해서도 엿볼 수 있어서 좋았습니다.`
}]

function initPortfolioModal(index) {
    if (index > 3) $("#portfolioModalImage").attr("src", "assets/img/portfolio/" + index + ".png")
    else           $("#portfolioModalImage").attr("src", "assets/img/portfolio/" + index + ".jpg")
    $('#portfolioModalTitle').html(portfolio[index].title)
    $('#portfolioModalTag').html(portfolio[index].tagList.join(', '))
    $('#portfolioModalForm').html(portfolio[index].form)
    $('#portfolioModalLink').html('')
    $('#portfolioModalLink').attr("href", portfolio[index].link)
    if (portfolio[index].link) $('#portfolioModalLink').html(portfolio[index].link)
    $('#portfolioModalLanguage').html(portfolio[index].language.join(', '))
    $('#portfolioModalContent').html(newLineInHTML(portfolio[index].content))
}

function newLineInHTML(text) {
    return text.replace(/(\n|\r\n)/g, '<br>')
}