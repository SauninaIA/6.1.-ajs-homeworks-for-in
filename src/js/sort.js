export default function orderByProps(obj, props) {
    const propsToSort = Object.keys(obj).sort((word1, word2) => word1 > word2 ? 1 : -1);
    const otherProps = propsToSort.filter(item => !props.includes(item));
    const sortedProps = Array.from(props).concat(otherProps);
    console.log(sortedProps);
    const result = [];
    sortedProps.forEach((sortedProp, i) => {
        for (const prop in obj) {
            if (prop === sortedProp) {
                const item = {};
                item.key = prop;
                item.value = obj[prop];
                result[i] = item;
            }
        }
    });
    return result;
}
