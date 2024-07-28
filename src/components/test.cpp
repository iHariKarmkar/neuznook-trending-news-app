#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main() {
    vector<int>arr={3,1,3,2};
    int n=arr.size();

    int count1=0,count2=0;
   map<int,int>mp,mp1;

    for(int i=0;i<n;i++){
        if(i%2==0){
            mp[arr[i]]++;
        }
        else{
            mp1[arr[i]]++;
        }
    }

    for(auto it:mp1)
    

    return 0;
}