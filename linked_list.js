class LinkedList
{
    //  Represents the whole list

    constructor()
    {
        this.head = null;   //  The head of the list (initially null)
        this.size = 0;  //  The size of the list (initially 0)
    }

    append(value)
    {
        //  Adds a new node to the end of the list
        const newNode = new Node(value);

        if (this.head === null)
        {
            //  if the list is empty, set the head to the new node
            this.head = newNode;
        }
        else
        {
            //  Traverse the list until we reach the end
            let current = this.head;

            while(current.next !== null)
            {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    prepend(value)
    {
        //  Adds a new node to the beginning of the list
        const newNode = new Node(value);

        if (this.head === null)
        {
            //  if the list is empty, set the head to the new node
            this.head = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    listSize()
    {
        //  Returns the number of nodes in the list
        return this.size;
    }

    listHead()
    {
        //  Returns the first node in the list
        return this.head;
    }

    listTail()
    {
        //  Returns the last node in the list
        if (this.head === null)
        {
            return null;
        }
        else
        {
            let current = this.head;

            while (current.next !== null)
            {
                current = current.next;
            }
            return current;
        }

    }

    at(index)
    {
        //  Returns the node at the specified index
        if (this.head === null)
        {
            return null;
        }
        else
        {
            let current = this.head;
            let count = 0;

            while (current.next !== null && count < index)
            {
                current = current.next;
                count++;
            }
            return current;
        }
    }

    pop()
    {
        //  Removes the last node from the list and returns it
        if (!this.head)
        {
            return null;
        }

        if (this.head.next === null)
        {
            const lastNode = this.head;
            this.head = null;
            this.size--;
            return lastNode;
        }
        let current = this.head;
        let previous = null;
        
        while (current.next !== null)
        {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size--;

        return current;
    }

    contains(value)
    {
        //  Returns true if the list contains a node with the specified value
        if (this.head === null)
        {
            return false;
        }
        else
        {
            let current = this.head;
            let i = 0;
            while (i < this.size)
            {
                if (current.value === value)
                {
                    return true;
                }
                current = current.next;
                i++;
            }
        }
        return false;

    }

    find(value)
    {
        //  Returns the index of the first node with the specified value
        let i = 0;
        let current = this.head;
        while (i < this.size)
        {
            if (current.value === value)
            {
                return i;
            }
            current = current.next;
            i++;
        }
        return (-1);
    }

    insertAt(index, value)
    {
        // Inserts a new node at the specified index
        if (index < 0 || index > this.size)
        {
            return null;
        }
        else if (index == 0)
        {
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            return "Successfully inserted new node at index 0";
        }
        else
        {
            const newNode = new Node(value);
            let current = this.head;
            let previous = null;
            let i = 0;
            while (i < index)
            {
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = newNode;
            newNode.next = current;
            return `Successfully inserted new node at index ${index}`;
        }
    }

    removeAt(index)
    {
        if (index < 0 || index > this.size)
        {
            return null;
        }
        else if (index == 0)
        {
            const removedNode = this.head;
            this.head = this.head.next;
            this.size--;
            return removedNode;
        }
        else
        {
            let current = this.head;
            let previous = null;
            let i = 0;
            while (i < index)
            {
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = current.next;
            this.size--;
            return current;
        }
    }

    toString()
    {
        //  Returns a string representation of the list
        return JSON.stringify(this.head);
    }

}

class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}



const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
console.log(myList.listSize());
console.log(myList.listHead());
console.log(myList.listTail());
console.log(myList.contains(5));
console.log(myList.contains(3));
console.log(myList.find(5));
console.log(myList.toString());
console.log(myList.insertAt(1, 10));
console.log(myList.toString());
console.log(myList.removeAt(1));
console.log(myList.toString());