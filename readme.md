# Section A: Code Review
[========]

------------

### Option 1: Python Task
<!--more-->

```python
class Solution:
    # Prevent pep 8 naming conversions violations groupAnagram is in camel case
    @staticmethod
    def groupAnagrams(strs):
        # make sure you correct your indentation errors
        # Please document your solution logic with comments
        result = {}
        for i in strs:
            x = "".join(sorted(i))
            # check 8 sort between iterations of strs
            if x in result:
                result[x].append(i)
            else:
                result[x] = [i]
        return list(result.values())


if __name__ == '__main__':
    ob1 = Solution()
    print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

```
## Review
-  Prevent pep 8 naming conversions violations "groupAnagram" is in line two is in camelCase
- Be mindful of your indentation errors
	make sure you indent acouding to the scope of the funtion from line 3 	the code block is out of the function scope
- to write clean code please document your solution logic with comments
- sort takes in a parameter it can not be left blank in line 5
- always read your errors and handle all exceptions

besides from those issues the logic is correct
good job on implementing a class and its object.


## Section B

[One of my projects](https://github.com/Vince095/shopMO "One of my projects")

## Section C: Code Challenge




#### SECTION D
[self indroduction](https://www.loom.com/share/b114804e7d6843a9b647a89cc8c95893 "self indroduction")

