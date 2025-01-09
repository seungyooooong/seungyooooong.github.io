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
    title: 'T-Commerce Service App 개발',
    tagList: ['T-Commerce', 'Vue.js'],
    form: 'TV App',
    language: ['html', 'css', 'javascript'],
    content: `Aircode에 근무하면서 Vue.js를 이용해 T-Commerce Service App을 개발하였습니다.

    TV App이라는 특징이 있고, 회사 내부 Framework를 일부 사용하긴 하지만 전체적으로 WebView라는 틀 안에서 Vue.js를 사용하기 때문에 일반적인 웹 개발 경험과 유사하게 Vue.js의 다양한 기능에 대해서 익힐 수 있었습니다.
    대표적으로 component, prototype의 개념과 props, mixin, computed등 개념에 대해 익히고 사용하였는데, Vue라는 프레임워크에 대한 이해도 뿐만 아니라 프론트엔드 개발에 대한 전반적인 이해도를 높일 수 있었습니다.

    가장 핵심이 되는 부분은 MVVM패턴이라고 느껴졌는데 개념적으로는 알고 있었지만 실제 개발에 적용해보면서 Model, View, ViewModel이 각각 무엇인지 정확하게 알게되었고, 이들을 분리했을 때 장단점에 대해 직접 부딪히며 배울 수 있어 좋았습니다.`
}, {
    title: 'NICE Mobile',
    tagList: ['WebApp', 'Vue.js'],
    form: 'WebApp',
    language: ['html', 'css', 'javascript'],
    content: `회사에서 B2B사업으로 관리자 앱을 WebApp형태로 개발하는 프로젝트를 진행했는데, 모바일 개발 분야로 회사에 지원했었던 이력 덕분에 해당 프로젝트를 참여하는 기회를 잡을 수 있었습니다.

    학부생 시절과 취업 준비 시절에는 Native App 개발 위주로 공부하고 준비했기 때문에 WebApp 개발 자체는 처음 참여하는 것이었고, 회사에서 경험한 프로젝트 또한 WebView를 사용하긴 하지만 기본적으로 TV App이라는 특징을 가지기 때문에 Web 개발 스킬도 약간 자신 없는 상태로 프로젝트를 시작하게 되었습니다.
    하지만 기존 경험들 덕분에 WebApp, Web, Native App의 차이를 쉽게 이해할 수 있었고 차이를 비교하며 공부하고 여러 기술들을 적용하다보니 오히려 흥미가 생겨 PL님께 질문도 많이 하면서 적극적으로 프로젝트에 참여하게 되었습니다.

    모바일이라는 환경의 하드웨어적인 조건과 제한, 컨트롤 등을 고려하면서 Vue.js로 작업하는 경험은 익숙한듯 새로웠고 기존에 고려하지 못했던 점까지 짚고 넘어가게 되어 더 많이 배울 수 있었습니다.`
}, {
    title: 'iOS App Dev Tutorials',
    tagList: ['iOS', 'Xcode', 'SwiftUI', 'UIKit'],
    form: 'iOS App',
    link: 'https://github.com/seungyooooong/iOS-App-Dev-Tutorials',
    language: ['Swift'],
    content: `애플에서 제공하는 공식 문서 중 iOS App Dev Tutorials를 통해 개발 공부 및 실습을 하였습니다.
    총 3가지 앱을 개발하였는데, Scrumdinger라는 이름의 SwiftUI를 이용해 만든 회의 기록 앱과 UIKit을 이용해 아이폰의 기본 앱인 미리 알림과 연동시켜 만든 Today, Network 통신을 해서 외부 API로부터 json형태로 데이터를 받아와 지진 정보를 보여주는 Earthquake를 개발하였습니다.

    Swift의 경우 사용한지 오래되지 않은 언어이다보니 자료가 부족하다고 느껴져 어떻게 공부를 시작해야 할지 고민했었는데, 애플에서 제공하는 좋은 양질의 실습 자료를 찾게 되었고 이를 통해 SwiftUI와 UIKit는 화면을 구성하는 방법부터가 다르다는 것, 내부의 다른 앱으로부터 데이터를 연동하는 방법, 외부 API에서 데이터를 받아오는 법 등 다양한 부분을 재밌게 배울 수 있었습니다.

    뿐만 아니라 애플에서 제공하는 공식 문서인 만큼 애플이 추구하는 앱의 접근성이나 코드의 구성에 대해서도 엿볼 수 있어서 좋았습니다.`
}, {
    title: 'Daily Scheduler',
    tagList: ['iOS', 'SwiftUI', 'AppStore'],
    form: 'iOS App',
    link: 'https://github.com/TeamND/Daily',
    language: ['Swift'],
    content: `일정 관리 앱 'Daily Scheduler'를 만들어 App Store에 출시하고 유지보수 및 관리하고 있습니다.
    애플의 기본 앱 중에 가장 불편한 앱은 뭘까를 고민하다가 캘린더 앱이 활용 가능성이나 기대치에 비해 불편하다는 의견을 듣게 되었고, 시장 조사와 사용자들의 니즈를 분석해 'Calendar', 'To-do', 'Basic' 세 가지 키워드를 중심으로 앱을 구상하였습니다.

    기본에 충실한 기능들을 유지하면서 사용성을 높이려는 욕심에 비해 기획이나 디자인 경험이 부족했던 탓에 예상보다 더 많은 시간이 들기도 했습니다. 하지만 이는 결과적으로 UI/UX를 고려해 기획을 분석하는 능력을 기를 수 있는 기회가 되었습니다.

    그리고 테스터들의 피드백을 듣고 앱을 수정하는 과정에서 애플에서 제공하는 기술들의 활용도와 SwiftUI에 대한 이해도를 더욱 높일 수 있었습니다. 또한 직접 스토어에 배포 및 출시를 하면서 개인정보 처리방침이나 앱 소개 이미지 등 프론트 개발 외적으로도 고려할 부분이 많다는 것을 배웠습니다.
    
    현재는 SwiftData를 적용하면서 iOS 17+ 환경으로 변경했으며 동시에 앱 전체적인 Refactoring을 적용하고 2.x.x버전을 운영중입니다. 데이터의 변경이 UI에 실시간으로 적용되는 SwiftData의 장점을 최대한 살려서 기존의 장점들을 유지하면서 동시에 코드를 경량화했습니다. 또한 리팩토링을 진행하면서 코드의 결합도를 낮추고 기존 기능과 UI단위에 집중한 모듈에서 응집도가 높은 모듈로 수정하는 경험을 했습니다.
    
    기획부터 개발, 출시까지의 경험은 iOS 개발자로서 기본을 다질 수 있는 좋은 경험이었다고 생각합니다. 앞으로도 꾸준한 추가 개발과 유지보수를 통해 'Daily' 앱을 발전시키고 iOS 개발자로서 역량을 개발할 것입니다.`
}, {
    title: 'RunUs',
    tagList: ['Team Project', 'iOS', 'SwiftUI'],
    form: 'iOS App',
    link: 'https://github.com/dnd-side-project/dnd-11th-2-iOS',
    language: ['Swift'],
    content: `DND 개발 동아리에서 4개월에 걸쳐 'RunUs'라는 iOS 앱을 개발했으며, 현재 피드백 수용 및 추가 개발을 진행하며 운영 중입니다.

    개발 초기, iOS 개발 팀원과 아키텍처에 대한 의견이 나뉘었습니다. 저는 러닝 앱의 핵심 기능인 페이스 체크와 기록 기능을 위해서는 데이터의 흐름을 명확하게 유지하는 것이 중요하다고 생각했고, 이를 고려했을 때 단방향 데이터 플로우가 필수적이라고 판단했습니다.
    또한, SwiftUI 및 Combine의 사용이 이미 결정된 상황에서 최적화된 성능을 이끌어낼 수 있는 아키텍처로 TCA가 적절하다고 생각했습니다.
    그러나 팀원은 TCA에 대해 처음 접하는 만큼, 공부하는 시간이 부족할 것을 우려해 익숙한 MVVM + Clean Architecture로 진행하고자 했습니다. 초기 개발 기간이 약 6주로 상당히 짧았고, TCA는 작은 프로젝트에 적용하기에는 구조가 복잡하다는 평가를 받을 만큼 초기 세팅에 시간이 필요했기 때문입니다.

    팀원의 주장은 충분히 일리 있었지만, 저는 한 번 내린 결정에 대해 만족할 만큼 고집을 부려보는 성격이 있어, 팀원의 의견을 그대로 수용하기보다는 설득을 시도하기로 결심했습니다.
    TCA는 테스트 코드를 작성하기에 훨씬 유리해 시간적 제약을 어느 정도 상쇄할 수 있다는 점을 강조했고, 프로젝트의 규모와 요구되는 기능을 고려했을 때, TCA가 더 큰 시너지를 낼 수 있을 것이라고 주장했습니다.
    또한, 개발 초기 설계와 기획이 진행 중이었기에 본격적인 개발에 들어가기 전에 스터디를 진행하자는 제안도 했습니다. 긴 회의 끝에 결국 팀원을 설득할 수 있었습니다.

    결국 TCA 아키텍처를 채택하여, store와 뷰 컴포넌트를 독립적인 모듈 단위로 설계해 개발했습니다. 이를 통해 코드의 재사용성과 유지보수성을 극대화하고, 확장 가능한 코드를 작성할 수 있었습니다.
    또한, 테스트 코드를 쉽게 작성하면서 사이드 이펙트를 최소화해 코드 품질을 유지하며 개발 속도를 높일 수 있었습니다. 이 경험을 통해 TCA 아키텍처의 채택이 협업 과정에서 유리하게 작용했다고 생각합니다.
    의견 차이가 있을 때 주장을 고집하는 것이 프로젝트 진행을 지연시킬 수 있는 단점으로 작용할 수 있었지만, 충분한 근거와 해결책을 준비해 설득하고 좋은 결과를 책임질 수 있다면, 이는 장점으로도 작용할 수 있다는 것을 다시 한 번 느끼게 되었습니다.`
}]

function initPortfolioModal(index) {
    if (index > 2) $("#portfolioModalImage").attr("src", "assets/img/portfolio/" + index + ".png")
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