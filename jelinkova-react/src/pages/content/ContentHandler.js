export const contentHandler = (source, moduleName, id) => {
    return source.filter(item => item.module === moduleName).find(item => item.id === id);
};