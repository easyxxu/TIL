import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Solution {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for(int tc = 1; tc <= T; tc++){
            int[][] arr = new int[9][9];
            int result = 1;
            for(int i = 0; i < 9; i++){
                for(int j = 0; j < 9; j++){
                    arr[i][j] = sc.nextInt();
                }
            }
            
            for(int i = 0; i< 9; i++) {
            	Set<Integer> setRow = new HashSet<>();
            	Set<Integer> setCol = new HashSet<>();
            	for(int j = 0; j < 9; j++) {
            		setRow.add(arr[i][j]);
            		setCol.add(arr[j][i]);
            	}
            	if(Check(setRow) == false || Check(setCol) == false) {
            		result = 0;
            		break;
            	}
            }

            if(result == 0) {
            	System.out.printf("#%d 0\n",tc);
            	continue;
            }
            
            for(int i = 0; i < 9; i+=3) {
	            for(int j = 0; j < 9; j+=3) {
	            	Set<Integer> set = new HashSet<>();
	            	for(int x = 0; x < 3; x++) {
	            		for(int y = 0; y < 3; y++) {
	            			set.add(arr[i+x][j+y]);
	            		}
	            	}
	            	if(Check(set) == false) {
	            		result = 0;
	            		break;
	            	}
	            }
	            if(result == 0) break;
            }
            System.out.printf("#%d %d\n",tc,result);
        }
    }
    public static boolean Check(Set set){
        if(set.size() != 9) {
        	return false;
        }
        return true;
    }
}
