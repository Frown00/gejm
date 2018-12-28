// Type is equivalent to for instance platform or genre
export const getCSSPostfixDependsOnType = (arrayTypeName, typeName) => {
    const postfixWithName = arrayTypeName.filter((typeObject) => {
        return typeObject.name === typeName.toLowerCase();
    })[0];

    let postfix = '--normal';
    if(postfixWithName !== undefined) {
        postfix = postfixWithName.cssPostfix;
    } else {
        //nothing
    }
    return postfix;
}