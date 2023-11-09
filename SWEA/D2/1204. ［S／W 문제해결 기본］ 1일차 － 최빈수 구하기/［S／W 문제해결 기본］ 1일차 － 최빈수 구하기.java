import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Solution {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for(int tc = 1; tc <= T; tc++) {
			int N = sc.nextInt();
			int[] arr = new int[101];
			for(int i=0;i<1000;i++) {
				int num = sc.nextInt();
				arr[num]++;
			}
			int max = 0, idx = 0;
			for(int i=0;i<=100;i++) {
				if(max <= arr[i]) {
					max = arr[i];
					idx = i;
				}
			}
			System.out.printf("#%d %d\n", N, idx);
		}
	}
}