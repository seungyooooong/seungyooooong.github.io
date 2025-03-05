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

    가장 핵심이 되는 부분은 MVVM패턴이라고 느껴졌는데 개념적으로는 알고 있었지만 실제 개발에 적용해보면서 Model, View, ViewModel이 각각 무엇인지 정확하게 알게되었고, 이들을 분리했을 때 장단점에 대해 직접 부딪히며 배울 수 있어 좋았습니다.
    
    Lotte One TV, 현대 홈쇼핑, 쇼핑엔티, CJ ONSTYLE+ 앱 리뉴얼 및 유지보수에 참여하였으며 평균 약 50% 이상 프론트 개발을 담당하면서 추가로 정합이나 배포를 지원하는 등 다양한 경험을 하였습니다.`
}, {
    title: 'NICE Mobile',
    tagList: ['WebApp', 'Vue.js'],
    form: 'WebApp',
    language: ['html', 'css', 'javascript'],
    content: `회사에서 B2B사업으로 관리자 앱을 WebApp형태로 개발하는 프로젝트를 진행했는데, 모바일 개발 분야로 회사에 지원했었던 이력 덕분에 해당 프로젝트를 참여하는 기회를 잡을 수 있었습니다.

    학부생 시절과 취업 준비 시절에는 Native App 개발 위주로 공부하고 준비했기 때문에 WebApp 개발 자체는 처음 참여하는 것이었고, 회사에서 경험한 프로젝트 또한 WebView를 사용하긴 하지만 기본적으로 TV App이라는 특징을 가지기 때문에 Web 개발 스킬도 약간 자신 없는 상태로 프로젝트를 시작하게 되었습니다.
    하지만 기존 경험들 덕분에 WebApp, Web, Native App의 차이를 쉽게 이해할 수 있었고 차이를 비교하며 공부하고 여러 기술들을 적용하다보니 오히려 흥미가 생겨 PL님께 질문도 많이 하면서 적극적으로 프로젝트에 참여하게 되었습니다.

    모바일이라는 환경의 하드웨어적인 조건과 제한, 컨트롤 등을 고려하면서 Vue.js로 작업하는 경험은 익숙한듯 새로웠고 기존에 고려하지 못했던 점까지 짚고 넘어가게 되어 더 많이 배울 수 있었습니다.
    
    결과적으로 50%이상 페이지를 담당하며 개발하였고 PM, PL을 모두 외주를 맡긴 환경이어서 PA역할과 함께 회사, 고객사, PL 세 방향의 의사소통을 담당하는 경험도 하게 되었습니다.`
}, {
    title: 'iOS App Dev Tutorials',
    tagList: ['iOS', 'Xcode', 'SwiftUI', 'UIKit'],
    form: 'iOS App',
    links: ['https://github.com/seungyooooong/iOS-App-Dev-Tutorials'],
    language: ['Swift'],
    content: `애플에서 제공하는 공식 문서 중 iOS App Dev Tutorials를 통해 개발 공부 및 실습을 하였습니다.
    총 3가지 앱을 개발하였는데, Scrumdinger라는 이름의 SwiftUI를 이용해 만든 회의 기록 앱과 UIKit을 이용해 아이폰의 기본 앱인 미리 알림과 연동시켜 만든 Today, Network 통신을 해서 외부 API로부터 json형태로 데이터를 받아와 지진 정보를 보여주는 Earthquake를 개발하였습니다.

    Swift의 경우 사용한지 오래되지 않은 언어이다보니 자료가 부족하다고 느껴져 어떻게 공부를 시작해야 할지 고민했었는데, 애플에서 제공하는 좋은 양질의 실습 자료를 찾게 되었고 이를 통해 SwiftUI와 UIKit는 화면을 구성하는 방법부터가 다르다는 것, 내부의 다른 앱으로부터 데이터를 연동하는 방법, 외부 API에서 데이터를 받아오는 법 등 다양한 부분을 재밌게 배울 수 있었습니다.

    뿐만 아니라 애플에서 제공하는 공식 문서인 만큼 애플이 추구하는 앱의 접근성이나 코드의 구성에 대해서도 엿볼 수 있어서 좋았습니다.`
}, {
    title: 'Daily Scheduler',
    tagList: ['iOS', 'SwiftUI', 'AppStore'],
    form: 'iOS App',
    links: ['https://github.com/TeamND/Daily', 'https://apps.apple.com/kr/app/daily-scheduler/id6480167782'],
    language: ['Swift'],
    content: `일정 관리 앱 'Daily Scheduler'를 만들어 App Store에 출시하고 유지보수 및 관리하고 있습니다.

    애플의 기본 앱 중 캘린더 앱이 활용 가능성이나 기대치에 비해 불편하다는 의견을 들었습니다.
    이를 바탕으로 시장 조사와 사용자들의 니즈를 분석한 후, ‘Calendar’, ‘To-do’, ‘Basic’ 세 가지 키워드를 중심으로 앱을 구상했습니다.
    사용성에 초점을 맞춰 UI를 설계했으며, 사용자의 피드백을 빠르게 반영하기 위해 유지보수가 용이하고 재사용성이 높은 코드를 작성하고자 노력했습니다.

    초기에는 MVVM과 Clean Architecture의 결합 과정에서 계층 간의 역할을 명확히 정의하는 데 어려움을 겪었지만, 이론 학습과 실전 개발을 병행하며 적용한 결과, 폴더 및 파일 구조를 Clean Architecture 원칙에 맞춰 기능별로 모듈화할 수 있었습니다.
    그 결과, 유지보수와 추가 개발 소요 시간이 평균 15% 단축되었으며, UI 및 비즈니스 로직을 분리하면서 사용자 경험 개선에도 집중할 수 있었습니다.
    예를 들어, UI변경에 직접적인 영향을 주는 변수들은 ViewModel에서 관리하며, 비즈니스 로직은 UseCase에서 다루고 데이터의 처리 작업은 DataSource로 분리하였습니다.
    또한 의존성 주입을 통해 유닛 테스트가 용이한 구조를 설계하여 코드 안정성을 높였습니다.
    이러한 경험을 통해 클린 아키텍처를 활용한 개발이 장기적으로 프로젝트 품질과 개발 속도를 모두 높일 수 있음을 직접 체감할 수 있었습니다.

    현재는 2.x.x 버전으로의 리팩토링 과정을 거쳐 iOS 17+ 환경에서 SwiftData를 적용하여 앱을 운영 중입니다.
    SwiftData의 장점을 활용해, 기존의 데이터 처리 방식을 경량화하면서도 앱의 안정성을 향상했습니다.
    또한 기존 코드의 결합도를 낮추는 한편, 기능과 UI 단위에 집중했던 모듈을 응집도가 높은 구조로 재설계했습니다.
    이 과정에서 데이터 처리 속도가 약 30% 개선되었으며, 기능 확장성과 코드의 유지보수성을 동시에 개선할 수 있었습니다.`
}, {
    title: 'RunUs',
    tagList: ['Team Project', 'iOS', 'SwiftUI'],
    form: 'iOS App',
    links: ['https://github.com/dnd-side-project/dnd-11th-2-iOS', 'https://apps.apple.com/kr/app/runus/id6689522964'],
    language: ['Swift'],
    content: `'RunUs'라는 iOS 앱을 개발해 운영 중입니다.
    
    개발 초기에 있었던 iOS 개발 팀원과의 아키텍처에 대한 의견 차이가 기억에 남습니다.
    저는 러닝 앱의 핵심 기능인 페이스 체크와 기록 기능의 특성상, 데이터의 흐름이 명확하게 유지되어야 한다고 판단했습니다. 특히, SwiftUI와 Combine의 사용이 이미 결정된 상황에서, 단방향 데이터 플로우를 기반으로 한 TCA가 적합하다고 생각했습니다.
    반면, 팀원은 TCA가 초기 설정에 시간이 걸리고 학습 곡선이 높다는 점에서 익숙한 MVVM + Clean Architecture로 진행하기를 원했습니다.

    초기 개발 기간이 약 6주로 짧았던 만큼, 팀원의 우려는 일리가 있었습니다. 그러나 저는 TCA의 장점이 초기 투자 시간을 상쇄할 수 있다는 점을 강조하며 설득을 시도했습니다.
    TCA는 테스트 코드 작성에 유리해 버그를 줄이고 개발 품질을 유지할 수 있다는 아키텍처라는 점을 설명했습니다. 또한, 개발 초반 기획 및 설계 단계에서 짧은 스터디 세션을 진행하면 학습 부담을 완화할 수 있다는 제안을 했습니다.
    회의 과정에서 팀원의 의견을 경청하고, 프로젝트 규모와 기능 요구사항에 따른 구체적인 비교 자료를 준비하며 논의했습니다. 결국, 팀원을 설득해 TCA 아키텍처를 채택할 수 있었습니다.

    TCA를 기반으로 Store와 뷰 컴포넌트를 독립적인 모듈 단위로 설계한 결과, 코드의 재사용성과 유지보수성을 극대화했습니다. 또한, 테스트 코드 작성 시간을 약 50% 단축하고 사이드 이펙트를 최소화해 안정적인 앱 개발이 가능했습니다.
    최종적으로 초기 6주 동안 계획했던 기능의 90%를 구현하며 프로젝트를 성공적으로 완료할 수 있었습니다.

    이러한 경험은 단순히 익숙하거나 쉽고 빠른 길을 택하기보다, 어렵더라도 효율적이고 장기적으로 유리한 방식을 선택하는 성격에서 비롯되었다고 생각합니다.
    앞으로도 팀의 상황을 객관적으로 고려하고 전체의 궁극적인 이득을 최우선으로 두어, 협업과 커뮤니케이션을 통해 최선의 결과를 도출하기 위해 노력하겠습니다.`
}]

function initPortfolioModal(index) {
    if (index > 2) $("#portfolioModalImage").attr("src", "assets/img/portfolio/" + index + ".png")
    else           $("#portfolioModalImage").attr("src", "assets/img/portfolio/" + index + ".jpg")
    $('#portfolioModalTitle').html(portfolio[index].title)
    $('#portfolioModalTag').html(portfolio[index].tagList.join(', '))
    $('#portfolioModalForm').html(portfolio[index].form)
    updatePortfolioLinks(index);
    $('#portfolioModalLanguage').html(portfolio[index].language.join(', '))
    $('#portfolioModalContent').html(newLineInHTML(portfolio[index].content))
}

function updatePortfolioLinks(index) {
    $('#portfolioModalLink').html('');
    
    const links = Array.isArray(portfolio[index].links) 
        ? portfolio[index].links 
        : (portfolio[index].link ? [portfolio[index].link] : []);
    
    if (links.length === 0) return;
    
    links.forEach(link => {
        if (!link) return;
        
        let prefix = '';
        let iconHtml = '';
        
        if (link.includes('github.com')) {
            prefix = 'GitHub: '
            iconHtml = '<i class="fab fa-github" style="margin-right: 5px;"></i>';
        } 
        else if (link.includes('apps.apple.com')) {
            prefix = 'App Store: '
            iconHtml = '<i class="fab fa-app-store" style="margin-right: 5px;"></i>';
        }
        else if (link.includes('play.google.com')) {
            prefix = 'Google Play: '
            iconHtml = '<i class="fab fa-google-play" style="margin-right: 5px;"></i>';
        }
        
        const linkElement = $('<div class="portfolio-link-item" style="margin-bottom: 10px;"></div>');
        const labelSpan = $('<span style="font-weight: 500;"></span>').html(iconHtml + prefix);
        const anchor = $('<a></a>')
            .attr('href', link)
            .attr('target', '_blank')
            .attr('rel', 'noopener noreferrer')
            .text(link);
        
        linkElement.append(labelSpan).append(anchor);
        $('#portfolioModalLink').append(linkElement);
    });
}

function newLineInHTML(text) {
    return text.replace(/(\n|\r\n)/g, '<br>')
}