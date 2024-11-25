# State Management

### Resources

1. [Free code camp Video](https://youtu.be/-bEzt5ISACA?si=hWVsglYi6iQ3Ho8K)
2. [ppt](https://punits.dev/jargon-free-intros/why-do-we-need-a-state-management-library-in-react/)
3. [React dev docs](https://react.dev/learn/managing-state)
4. Use state hook setter function takes previous state as input for callback function 
    ```javascript
    const [checkedItems, setCheckedItems] = useState(list.reduce((result: Record<string, boolean>, currentItem) => {
        result[currentItem.id.toString()] = false;
        return result;
    }, {}));

    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    ```
