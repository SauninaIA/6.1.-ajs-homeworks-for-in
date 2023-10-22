// export default function orderByProps(obj, props) {
//     const propsToSort = Object.keys(obj).sort((word1, word2) => word1 > word2 ? 1 : -1);
//     const otherProps = propsToSort.filter(item => !props.includes(item));
//     const sortedProps = Array.from(props).concat(otherProps);
//     console.log(sortedProps);
//     const result = [];
//     sortedProps.forEach((sortedProp, i) => {
//         for (const prop in obj) {
//             if (prop === sortedProp) {
//                 const item = {};
//                 item.key = prop;
//                 item.value = obj[prop];
//                 result[i] = item;
//             }
//         }
//     });
//     return result;
// }

export default function orderByProps1(obj, props) {
    const keys = Object.keys(obj);
    const keysNotToSort = keys.filter((word) => !props.includes(word));
    const alphaberSort = keysNotToSort.sort(((word1, word2) => word1 > word2 ? 1 : -1));
    const sortedKeys = Array.from(props).concat(alphaberSort);
    const result = sortedKeys.map(el => {
        return {
            key: el,
            value: obj[el]
        };
    });
    return result;
}
