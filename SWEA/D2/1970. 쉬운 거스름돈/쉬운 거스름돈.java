import java.util.Scanner;

public class Solution {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for(int tc=1;tc<=T;tc++) {
			int N = sc.nextInt();
			String str = String.valueOf(N);
            char[] arr = str.toCharArray();
            N -= Integer.valueOf(String.valueOf(arr[arr.length-1]));
			System.out.printf("#%d\n", tc);
			while(N != 0) {
				N = calc(N, 50000);
				N = calc(N, 10000);
				N = calc(N, 5000);
				N = calc(N, 1000);
				N = calc(N, 500);
				N = calc(N, 100);
				N = calc(N, 50);
				N = calc(N, 10);
				System.out.println();
			}
		}
	}
	public static int calc(int N, int cash) {	
			if(N / cash != 0 && N >= cash) {
				System.out.printf("%d ", N / cash);
				N %= cash;
			}else if(N / cash == 0 || N == 0) {
				System.out.print("0 ");
			}
		return N;
	}
}