import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Solution {
	public static void main(String[] args) throws FileNotFoundException {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for(int tc = 1; tc <= T; tc++) {
			int N = sc.nextInt();
			int[] arr = new int[N];
			int max = 0;
			long total = 0;
			for(int i=0;i<N;i++) {
				arr[i] = sc.nextInt();
			}
			max = arr[N-1];
			for(int i=N-2;i>=0;i--) {
				if(max > arr[i]) {
					total += max - arr[i];
				}else if(max < arr[i]) {
					max = arr[i];
				}
			}
			System.out.printf("#%d %d\n", tc, total);
		}
	}
}