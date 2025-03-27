function extraClassName(htmlString:string): string {

    const classStartIndex = htmlString.indexOf('class="') + 'class="'.length;
    const classEndIndex = htmlString.indexOf('"', classStartIndex);

    // Extract the entire class attribute value
    const classAttribute = htmlString.substring(classStartIndex, classEndIndex);

    return classAttribute;

}


export { extraClassName };