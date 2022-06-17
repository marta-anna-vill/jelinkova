export const contentHandler = (source, moduleName, id) => {
    return source.filter(item => item.module === moduleName).find(item => item.id === id);
};

export const _contentServices = {
    getMassagesPrices: (massages) => {
        return massages.map(item => {
            return {
                id: item.id ?? 0,
                title: item.title ?? "",
                price: item.price ?? "",
                duration: item.duration ?? "",
                types: item.types?.map(type => {
                    return {
                        title: type.title ?? "",
                        price: type.price ?? "",
                        duration: type.duration ?? "",
                    }
                })
            }
        });
    }
}