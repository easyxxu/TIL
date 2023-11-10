import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

public class Solution {
	public static void main(String[] args) throws FileNotFoundException {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for(int tc = 1; tc <= T; tc++) {
			int[] arr = new int[10];
			int sum = 0;
			for(int i=0;i<10;i++) {
				arr[i] = sc.nextInt();
			}
			Arrays.sort(arr);
			for(int i=1; i<9; i++) {
				sum += arr[i];
			}
			System.out.printf("#%d %d\n", tc, Math.round((float) sum / 8));
		}
	}
}