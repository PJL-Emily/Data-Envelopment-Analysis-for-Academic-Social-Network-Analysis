
export function parseLabelName(labelName: string, type: 'Node' | 'Edge'): string {
    switch (type){
        case 'Node':
        {
            const maxNodeLabelLen = 9;
            if (labelName.length > maxNodeLabelLen){
                let remainedLabelName: string = labelName
                let newLabelName: string = '';
                while(remainedLabelName.length > 0) {
                    if (remainedLabelName.length <= maxNodeLabelLen) {
                        
                        newLabelName += remainedLabelName;
                        break;
                    }
                    else {
                        newLabelName += remainedLabelName.substring(0, maxNodeLabelLen) + "\n";
                        remainedLabelName = remainedLabelName.substring(maxNodeLabelLen);
                    }
                }
                return newLabelName;
            }
            else{
                return labelName;
            }
        }
        case 'Edge':
        {
            const maxEdgeLabelLen: number = 10;
            let labelNameLen: number = labelName.length;
            if (labelNameLen > maxEdgeLabelLen) {
                return (
                    labelName.substring(0, 5) +
                    "..." +
                    labelName.substring(labelNameLen - 3, labelNameLen)
                );
            } else {
                return labelName;
            }
        }
    }
}
