var isVisibleList = [false, false, false, false, false, false, false, false, false, false]

function clickStack(id) {
    var index = id.substring(4)
    $('#' + (isVisibleList[index] ? 'Text' : 'Icon') + index).hide()
    $('#' + (isVisibleList[index] ? 'Icon' : 'Text') + index).show()
    isVisibleList[index] = !isVisibleList[index]
}