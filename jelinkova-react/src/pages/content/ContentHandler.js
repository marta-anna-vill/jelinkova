export const contentHandler = (source, moduleName, id) => {
    return source.filter(item => item.module === moduleName).find(item => item.id === id);
};

export const _contentServices = {
    getMassagesPrices: (massages) => {
        return massages.map(item => {
            return {
                title: item.title ?? "",
                price: item.price ?? ""
            }
        });
    }
}